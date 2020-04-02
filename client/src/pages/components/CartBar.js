import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Product from './ProductContainer';
import { addItem } from '../../redux/actions/cartActions';

const CartBar = props => {
  const { cart, classes, theme, isBarOpen, closeBar, openBar } = props;

  const cartList = cart.map(item => <Product product={item} key={item.key} />);

  // return <div className="cartbar"></div>;
  /* <Drawer className="drawer" variant="persistent" anchor="right" open="open">
      {cartList}
    </Drawer>
*/
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={isBarOpen}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={closeBar}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const mapStateToProp = ({ cart }) => ({ cart });
const mapActionsToProp = {
  addItem
};
export default connect(
  mapStateToProp,
  mapActionsToProp
)(CartBar);
