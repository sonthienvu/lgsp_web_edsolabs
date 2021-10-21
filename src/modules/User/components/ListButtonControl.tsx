import React from "react";
import {showCreateUserForm} from "../redux/action/create_user";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../../redux/reducers";
import {Button, Col, Icon, Row} from "antd";

const mapStateToProps = (rootState: RootState) => ({
  createState: rootState.user.createState
});
const connector = connect(mapStateToProps, {showCreateUserForm});

type ReduxProps = ConnectedProps<typeof connector>;

interface IProps extends ReduxProps {
}

function ListButtonControl({showCreateUserForm}: IProps) {
  const onCreateNewClicked = () => {
    showCreateUserForm(true);
  }

  return (
    <div className="entryHeader">
      <Row>
        <Col md={16}>
          <div className="tmp-title-page-size20">Người dùng</div>
        </Col>
        <Col className="d-flex" md={8}>
          <Button onClick={onCreateNewClicked}>
            <Icon type="plus"/> Thêm mới
          </Button>
        </Col>
      </Row>
    </div>
  )
}
export default connector(ListButtonControl);
