import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCookbookIsFetching } from '../../redux/cookbook/cookbook.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import Cookbook from './cookbook.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCookbookIsFetching
});

const CookbookContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Cookbook);

export default CookbookContainer;