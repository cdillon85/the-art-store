import {connect} from 'react-redux'
import AccountComponent from '../components/AccountComponent'

const mapStateToProps = (state) => {
	return {
		user: state.account.user,
    	productLines: state.account.productLines
	}
}

export default connect(mapStateToProps, null)(AccountComponent)



