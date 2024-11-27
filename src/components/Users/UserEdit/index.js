import { Col, Flex, Row, Input } from "antd";
import React, { useState, useEffect } from "react";

const RowItem = ({ label, value, onChange, editable }) => {
  return (
    <Col xs={24} style={{ marginBottom: "10px" }}>
      <Flex justify="space-between" style={{ alignItems: "center" }}>
        <span style={{ fontWeight: "500" }}>{label}:</span>
        {editable ? (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ width: "70%" }}
          />
        ) : (
          <span>{value}</span>
        )}
      </Flex>
    </Col>
  );
};

const UserEdit = ({ record, onChange }) => {
  const [editingRecord, setEditingRecord] = useState(record);

  useEffect(() => {
    setEditingRecord(record);
  }, [record]);

  const handleChange = (field, value) => {
    const updatedRecord = {
      ...editingRecord,
      [field]: value,
    };
    setEditingRecord(updatedRecord);
    if (onChange) {
      onChange(updatedRecord);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <RowItem
        label="ID"
        value={editingRecord.id}
        editable={true}
        onChange={(value) => handleChange("id", value)}
      />
      <RowItem
        label="Name"
        value={editingRecord.name}
        editable={true}
        onChange={(value) => handleChange("name", value)}
      />
      <RowItem
        label="Phone"
        value={editingRecord.phone}
        editable={true}
        onChange={(value) => handleChange("phone", value)}
      />
      <RowItem
        label="Age"
        value={editingRecord.age}
        editable={true}
        onChange={(value) => handleChange("age", value)}
      />
      <RowItem
        label="Address"
        value={editingRecord.address}
        editable={true}
        onChange={(value) => handleChange("address", value)}
      />
    </Row>
  );
};
export default UserEdit;
