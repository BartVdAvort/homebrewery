require('./snippetbar.less');
const React = require('react');
const createClass = require('create-react-class');
const _     = require('lodash');
const cx    = require('classnames');


const SnippetsLegacy = require('./snippetsLegacy/snippets.js');
const SnippetsV3 = require('./snippets/snippets.js');

const execute = function(val, brew){
	if(_.isFunction(val)) return val(brew);
	return val;
};

const Snippetbar = createClass({
	getDefaultProps : function() {
		return {
			brew            : {},
			view            : 'text',
			onViewChange    : ()=>{},
			onInject        : ()=>{},
			onToggle        : ()=>{},
			showEditButtons : true,
			renderer        : 'legacy'
		};
	},

	getInitialState : function() {
		return {
			renderer : this.props.renderer
		};
	},

	handleSnippetClick : function(injectedText){
		this.props.onInject(injectedText);
	},

	renderSnippetGroups : function(){
		let snippets = [];

		if(this.props.view === 'text') {
			if(this.props.renderer === 'V3')
				snippets = SnippetsV3;
			else
				snippets = SnippetsLegacy;
		}

		return _.map(snippets, (snippetGroup)=>{
			return <SnippetGroup
				brew={this.props.brew}
				groupName={snippetGroup.groupName}
				icon={snippetGroup.icon}
				snippets={snippetGroup.snippets}
				key={snippetGroup.groupName}
				onSnippetClick={this.handleSnippetClick}
			/>;
		});
	},

	renderEditorButtons : function(){
		if(!this.props.showEditButtons) return;

		return <div className='editors'>
			<div className={cx('text', { selected: this.props.view === 'text' })}
				 onClick={()=>this.props.onViewChange('text')}>
				<i className='fa fa-beer' />
			</div>
			<div className={cx('style', { selected: this.props.view === 'style' })}
				 onClick={()=>this.props.onViewChange('style')}>
				<i className='fa fa-paint-brush' />
			</div>
			<div className={cx('meta', { selected: this.props.view === 'meta' })}
				onClick={()=>this.props.onViewChange('meta')}>
				<i className='fas fa-info-circle' />
			</div>
		</div>;
	},

	render : function(){
		return <div className='snippetBar'>
			{this.renderSnippetGroups()}
			{this.renderEditorButtons()}
		</div>;
	}
});

module.exports = Snippetbar;






const SnippetGroup = createClass({
	getDefaultProps : function() {
		return {
			brew           : {},
			groupName      : '',
			icon           : 'fas fa-rocket',
			snippets       : [],
			onSnippetClick : function(){},
		};
	},
	handleSnippetClick : function(snippet){
		this.props.onSnippetClick(execute(snippet.gen, this.props.brew));
	},
	renderSnippets : function(){
		return _.map(this.props.snippets, (snippet)=>{
			return <div className='snippet' key={snippet.name} onClick={()=>this.handleSnippetClick(snippet)}>
				<i className={snippet.icon} />
				{snippet.name}
			</div>;
		});
	},

	render : function(){
		return <div className='snippetGroup snippetBarButton'>
			<div className='text'>
				<i className={this.props.icon} />
				<span className='groupName'>{this.props.groupName}</span>
			</div>
			<div className='dropdown'>
				{this.renderSnippets()}
			</div>
		</div>;
	},

});
