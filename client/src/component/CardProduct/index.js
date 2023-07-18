import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState } from "react";

const InputComp = ({ jmlh, setJmlh }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <MDBBtn
        color="secondary"
        onClick={() => setJmlh(jmlh <= 1 ? 1 : jmlh - 1)}
      >
        -
      </MDBBtn>
      <MDBInput
        label="Jumlah"
        id="typeNumber"
        type="number"
        style={{ textAlign: "center" }}
        value={jmlh}
        onChange={(e) => setJmlh(e.target.value <= 1 ? 1 : e.target.value)}
      />
      <MDBBtn color="secondary" onClick={() => setJmlh(jmlh + 1)}>
        +
      </MDBBtn>
    </div>
  );
};

const CardProduct = ({
  postData,
  voucherById,
  setVoucherById,
  deleteData,
  setNewVcr,
}) => {
  const [jmlh, setJmlh] = useState(1);
  const total = jmlh * 500000 - voucherById.diskon;

  const handleSubmit = async () => {
    const random = Math.floor(Math.random() * 9999) + 1000;
    var threeMontAgo = new Date().getTime() + 90 * 24 * 60 * 60 * 1000;

    const voucher = {
      kode: `VCR${random}`,
      diskon: 10000,
      expired: new Date(threeMontAgo),
    };
    if (total >= 2000000) {
      postData(voucher);
      setNewVcr(true);
    } else {
      setNewVcr(false);
    }
    if (voucherById.kode) {
      deleteData(voucherById._id);
    }
    setVoucherById({ kode: "", diskon: 0 });
    setJmlh(1);
  };

  return (
    <MDBContainer>
      <h3
        className="text-center p-4"
        style={{ borderBottom: "1px solid grey" }}
      >
        Dapatkan voucher diskon 10rb dengan Min. Belanja 2jt
      </h3>
      <MDBCard>
        <MDBCardImage
          src="https://ae01.alicdn.com/kf/Hd4880c73f86e4306ba34e4e59d8064c1N/2022-Mesir-Kuno-Sarung-Bantal-Firaun-Hieroglif-Persegi-Dekorasi-Rumah-3D-Penutup-Bantal-Budaya-Mesir-Sarung.jpg_220x220.jpg_.webp"
          style={{ width: 250, margin: "auto" }}
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle>Bantal Firaun</MDBCardTitle>
          <InputComp jmlh={jmlh} setJmlh={setJmlh} />
          {voucherById.kode ? (
            <div
              className="alert alert-success alert-dismissible fade show d-flex justify-content-between mt-3"
              role="alert"
              style={{ padding: 15 }}
            >
              <div>
                *Voucher <strong>{voucherById.kode}</strong> berhasil digunakan.
              </div>
              <MDBBtn
                tag="a"
                color="none"
                onClick={() => setVoucherById({ kode: "", diskon: 0 })}
              >
                <MDBIcon fas icon="times-circle" size="lg" />
              </MDBBtn>
            </div>
          ) : null}
          <MDBTypography tag="h5" className="mt-3 text-center">
            Total : Rp. {total.toLocaleString()}
          </MDBTypography>
          <MDBBtn onClick={handleSubmit} className="mt-3">
            Checkout
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default CardProduct;
