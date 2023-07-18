import React, { useEffect } from "react";
import CardVoucher from "../CardVoucher";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const ListVoucher = ({
  getData,
  vouchers,
  deleteData,
  getDataById,
  newVcr,
  setNewVcr,
}) => {
  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3
        className="text-center p-4"
        style={{ borderBottom: "1px solid grey" }}
      >
        Voucher anda
      </h3>
      {newVcr ? (
        <div
          class="alert alert-success alert-dismissible fade show d-flex justify-content-between mt-3"
          role="alert"
          style={{ padding: 15 }}
        >
          <div>
            Anda mendapatkan voucher diskon 10rb. Gunakan sebelum tanggal
            kadaluarsa.
          </div>
          <MDBBtn tag="a" color="none" onClick={() => setNewVcr(false)}>
            <MDBIcon fas icon="times-circle" size="lg" />
          </MDBBtn>
        </div>
      ) : null}
      {vouchers.map((voucher, index) => (
        <CardVoucher
          key={index}
          voucher={voucher}
          deleteData={deleteData}
          getDataById={getDataById}
        />
      ))}
    </div>
  );
};

export default ListVoucher;
