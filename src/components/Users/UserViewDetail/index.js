import {
  Col,
  Flex,
  Row
} from "antd";

const RowItem = ({
  label,
  value
}) => {
  return ( <
    Col xs = {
      24
    } >
    <
    Flex justify = "space-between" >
    <
    span > {
      label
    } < /span> <
    span > {
      value
    } < /span> <
    /Flex> <
    /Col>
  );
};

const UserEdit = ({
  record
}) => {
  return ( <
    Row gutter = {
      [16, 16]
    } >
    <
    RowItem value = {
      record.id
    }
    label = "ID" / >
    <
    RowItem value = {
      record.name
    }
    label = "Name" / >
    <
    RowItem value = {
      record.phone
    }
    label = "Phone" / >
    <
    RowItem value = {
      record.age
    }
    label = "Age" / >
    <
    RowItem value = {
      record.address
    }
    label = "Address" / >
    <
    /Row>
  );
};

export default UserEdit;