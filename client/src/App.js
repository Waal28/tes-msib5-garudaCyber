import CardProduct from "./component/CardProduct";
import ListVoucher from "./component/ListVoucher";
import axios from "axios";
import { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function App() {
  const [vouchers, setVoucher] = useState([]);
  const [newVcr, setNewVcr] = useState(false);
  const [voucherById, setVoucherById] = useState({
    kode: "",
    diskon: 0,
  });

  const getData = async () => {
    const res = await axios.get("http://localhost:3001/voucher");
    setVoucher(res.data);
  };

  const getDataById = async (id) => {
    const res = await axios.get(`http://localhost:3001/voucher/${id}`);
    setVoucherById(res.data);
  };
  const postData = async (value) => {
    axios.post("http://localhost:3001/voucher", value);
    getData();
  };
  const deleteData = async (id) => {
    axios.delete(`http://localhost:3001/voucher/${id}`);
    getData();
  };

  return (
    <MDBContainer className="p-3">
      <MDBRow>
        <MDBCol size="md" className="d-flex justify-content-center">
          <CardProduct
            postData={postData}
            voucherById={voucherById}
            setVoucherById={setVoucherById}
            deleteData={deleteData}
            setNewVcr={setNewVcr}
          />
        </MDBCol>
        <MDBCol size="md" className="d-flex justify-content-center">
          <ListVoucher
            getData={getData}
            vouchers={vouchers}
            deleteData={deleteData}
            getDataById={getDataById}
            newVcr={newVcr}
            setNewVcr={setNewVcr}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
