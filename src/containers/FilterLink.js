import {setFilter} from '../actions'
import {connect} from 'react-redux'
import Footer from '../components/Footer'

const mapDispatchToProps = dispatch => ({
    filter : val => dispatch(setFilter(val))
})


export default connect(null, mapDispatchToProps)(Footer)