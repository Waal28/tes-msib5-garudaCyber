import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const CardVoucher = ({ voucher, deleteData, getDataById }) => {
  return (
    <div className="card text-center my-4 mx-auto" style={{ width: 300 }}>
      <div className="card-header text-end">
        <MDBBtn
          tag="a"
          color="none"
          style={{ color: "#dd4b39" }}
          onClick={() => deleteData(voucher._id)}
        >
          <MDBIcon far icon="trash-alt" />
        </MDBBtn>
      </div>
      <div className="card-body">
        <p className="card-text">
          Voucher diskon Rp.{voucher.diskon.toLocaleString()}.
        </p>
        <h5 className="card-title">{voucher.kode}</h5>
        <div className="card-footer text-muted">
          {new Date(voucher.expired).toLocaleString()}
        </div>
        {voucher.kode !== "XXXXXX" ? (
          <MDBBtn onClick={() => getDataById(voucher._id)}>Pakai</MDBBtn>
        ) : (
          <b>*Voucher kadaluarsa*</b>
        )}
      </div>
    </div>
  );
};

export default CardVoucher;
