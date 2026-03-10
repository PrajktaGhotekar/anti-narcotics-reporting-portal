import axios from "axios";

function AxiosTest() {

  const testAxios = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/test");
      alert("Axios connected ✅\n" + res.data);
    } catch (err) {
      console.error(err);
      alert("Axios NOT connected ❌");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Axios Test Page</h2>
      <button onClick={testAxios}>
        Test Axios Connection
      </button>
    </div>
  );
}

export default AxiosTest;
