import JSXComponent from 'metal-jsx';

class SearchBarComponent extends JSXComponent {
    render() {
        return (
        
            <input
                data-onkeyup={this.handleChange.bind(this)}
                name="text"
                value={this.state.searchText}
                
            />
            
        );
    }

    handleChange(event) {
        console.log(event);
        this.state.searchText = event.target.value;

        if (this.state.searchText) {
            this.emit('onSearch', {
                text: this.state.searchText
            });
        }
    }
}

SearchBarComponent.STATE = {
    value: {
        searchText: ''
    }
};

export default SearchBarComponent;