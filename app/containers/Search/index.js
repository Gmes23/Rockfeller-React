import React from 'react';
import { connect } from 'react-redux';

 export class SearchEvent extends React.Component {
    componentDidMount() {
      if (this.props.event && this.props.event.trim().length > 0) {
      this.props.onSubmitForm();
      }
    }

    render() {
        const { event } = this.props;


     return (
       <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.event}
                  onChange={this.props.onChangeSearch}
                />
              </label>
        </Form>
     )
    }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: (evt) => dispatch(changeSearch(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadEvents());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);