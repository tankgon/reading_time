import ZommSDK from "../../components/ZoomSdk";
//data

let payload = {
  meetingNumber: 89188088628,
  role: 0,
  sdkKey: "GZLhBaaAQg60WnNF4NNBtg",
  sdkSecret: "53SSP06QcWxOa4ZrxodhhFkxC35vsv6B",
  passWord: "d0rM40",
  userName: "GONT",
  userEmail: "anhkhoaquachvo@gmail.com",
  leaveUrl: "http://localhost:3000",
};

function LeanStudent() {
  return (
    <>
      <div>asdfsadfasdf</div>
      <ZommSDK payload={payload} />
    </>
  );
}

export default LeanStudent;
