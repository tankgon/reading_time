import ZommSDK from "../../components/ZoomSdk";
//data

let payload = {
  meetingNumber: 88132629505,
  role: 1,
  sdkKey: "GZLhBaaAQg60WnNF4NNBtg",
  sdkSecret: "53SSP06QcWxOa4ZrxodhhFkxC35vsv6B",
  passWord: "844n21",
  userName: "GONT",
  userEmail: "anhkhoaquachvo@gmail.com",
  leaveUrl: "http://localhost:3000",
};

function ZommSDKUser() {
  return (
    <>
      <div>asdfsadfasdf</div>
      <ZommSDK payload={payload} />
    </>
  );
}

export default ZommSDKUser;
