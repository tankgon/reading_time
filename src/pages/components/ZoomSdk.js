import React, { Fragment, useEffect } from "react";

function ZommSDK({ payload }) {
  useEffect(async () => {
    const { ZoomMtg } = await import("@zoomus/websdk");

    ZoomMtg.setZoomJSLib("https://source.zoom.us/2.18.2/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();

    ZoomMtg.generateSDKSignature({
      meetingNumber: payload.meetingNumber,
      role: payload.role,
      sdkKey: payload.sdkKey,
      sdkSecret: payload.sdkSecret,
      success: function (signature) {
        ZoomMtg.init({
          leaveUrl: payload.leaveUrl,
          success: function (data) {
            ZoomMtg.join({
              meetingNumber: payload.meetingNumber,
              signature: signature.result,
              userName: payload.userName,
              userEmail: payload.userEmail,
              passWord: payload.passWord,
              sdkKey: payload.sdkKey,
              tk: "",
              success: function (success) {
                console.log(success);
              },
              error: function (error) {
                console.log(error);
              },
            });
          },
        });
      },
      error: function (error) {
        console.log(error);
      },
    });
  }, []);

  return (
    <Fragment>
      {/* <link
        type="text/css"
        rel="stylesheet"
        href="https://source.zoom.us/2.18.2/css/bootstrap.css"
      /> */}
      <link
        type="text/css"
        rel="stylesheet"
        href="https://source.zoom.us/2.18.2/css/react-select.css"
      />
    </Fragment>
  );
}

export default ZommSDK;
