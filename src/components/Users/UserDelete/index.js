const UserDelete = ({ record }) => {
  return (
    <div>
      <p>{`Bạn có chắc chắn muốn xóa bản ghi có id = ${record.id} không?`}</p>
    </div>
  );
};
export default UserDelete;
