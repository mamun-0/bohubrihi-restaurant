import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";

class Menu extends Component {
  state = {
    comments: null,
    selectedDish: null,
    modalOpen: false,
  };

  onSelectDish = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: true,
      comments: this.commentFilter(dish.id, this.props.COMMENTS),
    });
  };

  commentFilter = (dishID, comments) => {
    return comments.filter((comment) => {
      if (dishID === comment.dishId) {
        return comment.comment;
      }
      return false;
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  render() {
    document.title = "Menu";
    const menu = this.props.dishes.map((dish) => {
      return (
        <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />
      );
    });

    return (
      <div className="container">
        <div className="row">
          <CardColumns>{menu}</CardColumns>
          <Modal isOpen={this.state.modalOpen}>
            <DishDetail
              selectedDish={this.state.selectedDish}
              comments={this.state.comments}
            />
            <ModalFooter>
              <Button color="primary" onClick={this.toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    COMMENTS: state.comments,
  };
};

export default connect(mapStateToProps)(Menu);
