import { take, put, call } from 'redux-saga/effects';

function fetchData() {
    return  fetch(url)
    .then(res => res.json() )
    .then(data => ({ data }) )
    .catch(ex => {
        console.log('parsing failed', ex);
        return ({ ex });
    });
}

function* yourSaga(action) {
    const { data, ex } = yield call(fetchData);
    if (data)
    yield put({ type: 'REQUEST_DONE', data });
    else
    yield put({ type: 'REQUEST_FAILED', ex });
}
export default function* watchAsync() {
    yield* takeLatest('BLAH', yourSaga);
}

class App extends Component {
    componentWillMount() {
        this.props.dispatch({type: 'BLAH'});
    }

    render(){
        return (<div>Data: {this.props.data}</div>);
    }
}

export default connect( state =>({
    data:state.data
}))(App);