import React from "react";
import c920 from "../assets/c920-hd-webcam.jpg";
import mic from "../assets/mic.jpg";
import steamDeck from "../assets/steam-deck.jpg";
import lightRing from "../assets/light-ring.jpg";
import mic2 from "../assets/mic2.jpg";
import vlogCamera from "../assets/vlog-cam.jpg";
import gopro from "../assets/go-pro.jpg";
import camLink from "../assets/cam-link.jpg";
import greenScreen from "../assets/green-screen.jpg";
import headphones from "../assets/headphones.jpg";
import logitech from "../assets/logitech.jpg";
import cam from "../assets/cam.jpg";
import elgatoRing from "../assets/elgato-ring-light.jpg";
import logiCam from "../assets/logi-cam.jpg";
import keyboard from "../assets/keyboard.jpg";
import mic3 from "../assets/mic3.jpg";
import razerKeyboard from "../assets/razer-keyboard.jpg";
import desk from "../assets/desk.jpg";
import Header2 from "../components/Header2";

const Shop2 = () => {
  const products = [
    {
      "id": 1,
      "name": "Logitech C920 HD Webcam",
      "price": "€30.87",
      "imageSrc": c920,
      "buyLink": "https://www.amazon.co.uk/Webcam-PC-Microphone-Conference-Facetime/dp/B099DF2RNS"
    },
    {
      "id": 2,
      "name": "Razer Seiren X USB Microphone",
      "price": "€93.06",
      imageSrc: mic,
      "buyLink": "https://www.amazon.co.uk/Razer-Seiren-Windscreen-Filter-YOUSHARES/dp/B09XFYB9R8"
    },
    {
      "id": 3,
      "name": "Elgato Stream Deck",
      "price": "€227.83",
      imageSrc: steamDeck,
      "buyLink": "https://www.amazon.co.uk/Elgato-Stream-Actions-Apps-Software-Like-OBS/dp/B07RL8H55Z"
    },
    {
      "id": 4,
      "name": "Neewer Ring Light Kit",
      "price": "€118.61",
      imageSrc: lightRing,
      "buyLink": "https://www.amazon.co.uk/NEEWER-Ring-Light-Kit-Smartphone/dp/B01N0OJPXC"
    },
    {
      "id": 5,
      "name": "Blue Yeti USB Microphone",
      "price": "€80.31",
      imageSrc: mic2,
      "buyLink": "https://www.amazon.co.uk/Blue-Yeti-Mic-Stand-Filter/dp/B0BKPRZB7V"
    },
    {
      "id": 6,
      "name": "Sony Alpha 7C Camera",
      "price": "€1694.06",
      imageSrc: vlogCamera,
      "buyLink": "https://www.amazon.co.uk/Photography-Vlogging-180%C2%B0Flip-Beginner-Batteries/dp/B0DJ2BQTRF"
    },
    {
      "id": 7,
      "name": "GoPro Hero 9 Black",
      "price": "€411.88",
      imageSrc: gopro,
      "buyLink": "https://www.amazon.co.uk/GoPro-HERO-Black-Waterproof-Stabilization/dp/B08G2HBBB6/ref=sr_1_3?crid=2MMTZVWKLPTMY&dib=eyJ2IjoiMSJ9.ZTh75z5-vxe6KYK_eNIy0BEf-iQXNlewh0jO3ubu3Ng3Sqh_tmNm1n6evKXQ7TppOgrGCP9VEcYg0bZXwH8UODCGhGVS_PalF1lySAVNj_clEv3WxM_nP2GPqL6WljDy7TO8UuNxDxztnbzYf1e_Td41OsCqWSzleF1TIWBBIQaRHIcMNDedT1iViqLOp_45ZJ_tAlk68wDyB9IYldjlhhh6dku7bHYG1gKWr1ZaG_0.uSBgC-TVRJqk0JiOj7NEy1Cc-7lTGGuxTs_670T-l4Y&dib_tag=se&keywords=GoPro%2BHero%2B9%2BBlack&qid=1740403564&sprefix=gopro%2Bhero%2B9%2Bblack%2Caps%2C154&sr=8-3&th=1"
    },
    {
      "id": 8,
      "name": "Elgato Cam Link 4K",
      "price": "€108.48",
      imageSrc: camLink,
      "buyLink": "https://www.amazon.co.uk/Elgato-Cam-Link-Broadcast-camcorder/dp/B07K3FN5MR/ref=sr_1_3?crid=1C503YO1EEKKY&dib=eyJ2IjoiMSJ9.UvfR7OQt4s7VnI1jy5-XKU4HOgHLyrIlFP56zdTJEFnmhQstx9fQu1HXjzoIBsARXedENFc5TZrAFa0cu8gs9Vqh50JOyt48T9hoWsFiuueBOaZTGsO3ClFXq88gVT4WkdV3rq8kP1ugZEZVtcxYQVMeErxQu3JxSRZ2gh6BzOh2dciXrsm2Nu-EWLMKxKgOLNH17zoy3W1GWbs0QVQOwmZoc_QSfBRWDYA9zoO9aw0.2ijoBrUGE5y9UBU_ECa_xrO7oaqnz4hdB27DDk676dI&dib_tag=se&keywords=Elgato%2BCam%2BLink%2B4K&qid=1740403660&sprefix=elgato%2Bcam%2Blink%2B4k%2Caps%2C160&sr=8-3&th=1"
    },
    {
      "id": 9,
      "name": "Green Screen Backdrop",
      "price": "€47",
      imageSrc: greenScreen,
      "buyLink": "https://www.amazon.co.uk/Background-Chromakey-Collapsible-Photography-Streaming/dp/B09NW8N2RC/ref=sr_1_1_sspa?crid=2A9IHT43RUOPH&dib=eyJ2IjoiMSJ9.13G9_YWF4-z8rAX4SeWuhI2em2o1UeZzhBL8Tf36WOm5WcoNQDn889Px4teRE1-jyOMllX9y-1-DH5PV4G-rT4iMDwM7sTyAUKO04W3Y0CTL6MbfCLQSR3fYKUhdczo9vDNFjIPe40tOjTPekQlnLr2P4eRtZnD6Rwa8A__GXJddfuiBnIGWgLInfoEPwDRDpJo0WiEdJqsl0g-cIDAVSk_TZ4o_BJAUmZhMtX35Gig.kzmCpcf15V8tGNA7XsH_2ZF9TRnFyNY7PkICAh9y6KM&dib_tag=se&keywords=Green+Screen+Backdrop&qid=1740403765&sprefix=green+screen+backdrop%2Caps%2C144&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
      "id": 10,
      "name": "Audio-Technica ATH-M50X Headphones",
      "price": "€198.90",
      imageSrc: headphones,
      "buyLink": "https://www.amazon.co.uk/Audio-Technica-ATH-M50xSTS-StreamSet-Streaming-Connection/dp/B0BRP7SW25/ref=sr_1_7?crid=301RTMXUZH2LA&dib=eyJ2IjoiMSJ9.BFKZfbUrx3NyDlJ5m8auGQNptaQxrJiKWHibRULllb058E24Mti53HCBFzTSNq8wdI9fH3vnvjom1ae1-Tnc9zB3ASL-DT8tIdeiF62x8YU6Ud8QDBMq_erh_4ldJ6fn8KGfm6LGoI0XQxpTuZ2BVDHLzHhAM4GJ_FkdfZOHTcDFX36ZKc_HrHIgCG9l0DiETw9L80vk-ua0llu5Q2l99IT0Fdo36v4Y_DBJm_4LHOwcw5KJgCRlmsfWmb5aUkj_eHx88LDiPQc1dK-Cj9aOkT4BMY_mPwLGj_EEpXa-GeroWTAVpsqNdYuQjVLYCKwJjjpCFnlB_3ag-aDxPQ0GX2unnQuTHqwbcDv1blOmChpCLendVIRTGHReJRvcA8dQslozR_iGUHlqjaQ-dG8q4NQpfPySq_-hDai3JecvEaBXLz3YGLIswJ-hPij5GWnB.MQrj83AOR6WntfbbkQyFDH-nQnMiTa4bC7ag0VTWPjo&dib_tag=se&keywords=Audio-Technica%2BATH-M50X%2BHeadphones&qid=1740403841&sprefix=audio-technica%2Bath-m50x%2Bheadphones%2Caps%2C152&sr=8-7&th=1"
    },
    {
      "id": 11,
      "name": "Logitech G Pro X Gaming Headset",
      "price": "€92.65",
      imageSrc: logitech,
      "buyLink": "https://www.amazon.co.uk/Logitech-Gaming-Headset-Generation-Headphone/dp/B07TLX61W7/ref=sr_1_3?crid=286KZAUWS4RPE&dib=eyJ2IjoiMSJ9.xRsqbbFCOJlh0mvsdL6So4eelIgwAOA3Alns3XwrjmQEoHObTE1oiuOS6gwnPKamcmo90-J_P2Hcdy_dJz02LsKb9vlleoCsGNJ0psmxsG_I4xDsct0NrZrEcPS1hmlvxsXctHpIDcwsUxqdtMSVt-rpQTqXWqGR_ht04I_9AVINuvUMpQUNPDGZqFqs8Rl-dECxBkk32QPALB8A3Yl-1I6M7alDd1w0sxDv8zwmigQ.cbaQFf4XIpjOSagDAtmePUkyqxKMyqcmLxneXhlEXxQ&dib_tag=se&keywords=Logitech%2BG%2BPro%2BX%2BGaming%2BHeadset&qid=1740404028&sprefix=logitech%2Bg%2Bpro%2Bx%2Bgaming%2Bheadset%2Caps%2C135&sr=8-3&th=1"
    },
    {
      "id": 12,
      "name": "GAMDIAS IRIS M1 Streaming Webcam",
      "price": "€61.27",
      imageSrc: cam,
      "buyLink": "https://www.amazon.co.uk/GAMDIAS-IRIS-M1-Distortion-Adjustable/dp/B0BFQ3XGHP/ref=sr_1_2?crid=1XA7OUW0Y1IN4&dib=eyJ2IjoiMSJ9.ZEYQL2nclJKmM9JX4dACZjrjX2xKowp3ftDzZaaoxTVSI73S_bw4bV3Gjg3AwUucItFtjYupJ-g6hEfuSdfL36OAquxUAdnkW3Xi537An0uaobPBXq1pB8Z7qAnFehKrACD7QVX5ciadouLcb_7Vys6EhxENH9UoTcq5NwAMHvQT306G7fmJayT3gxD4OWXq.x2fNxpko6Q8YA3e0RErXqu-SS4uxma8G74uNDIst1Wc&dib_tag=se&keywords=Streamlabs+OBS&qid=1740404161&sprefix=streamlabs+obs%2Caps%2C137&sr=8-2"
    },
    {
      "id": 13,
      "name": "Elgato Ring Light",
      "price": "€98.84",
      imageSrc: elgatoRing,
      "buyLink": "https://www.amazon.co.uk/Elgato-Key-Light-Neo-Professional/dp/B0CVYD9HB4/ref=sr_1_6?crid=232U7B38EGV9B&dib=eyJ2IjoiMSJ9.C33WB-e9DQGFJiQCQ4WsD2jdiWoLTiA989F6TtYFAN4bXgLosorOO4BncQuMOmiEdaryjoRUX7iZbB-v9HO-zNxXQGof5bj-FP-GYMToB7--O0RPBC95ODNVE-jKpxJOvKtJwj8trvUKgeDbagSYiAvrQNKKwX4mmaTPBOxexAJPT6hzPDlHCtThmN1hls08SSzZtM_DdWSVrIyuyCuw-o1wxL-oVnqhqAyjyEXQdDU.O0MUC525xm_bZL2Y7O68IO3gTOnkk_UmsoiD2WlI-o8&dib_tag=se&keywords=Elgato+Ring+Light&qid=1740404294&sprefix=elgato+ring+light%2Caps%2C164&sr=8-6"
    },
    {
      "id": 14,
      "name": "Logitech Brio Stream Webcam",
      "price": "€159.40",
      imageSrc: logiCam,
      "buyLink": "https://www.amazon.co.uk/Logitech-Brio-Stream-Webcam-Correction/dp/B0CZ98ZBPV/ref=sr_1_12?crid=393VB9H1GX02V&dib=eyJ2IjoiMSJ9.RRi7XcWydeeNHQd2OW2rvfoM-92Hbzwmewt5qY_6fGBpU7PgIW6gGbkGmMaL-5QjyZj15pxqSj9low0zCovas-BJo1nClxZcMd6eZOQZzIjGrGTwsA29wSl8rkhOAtGW1VsaRk-X7MV0d-Xl5XMAJLymmTiPz9fopKQXbHSgH5aqJXxaVV8ex9w89C9G4mYgXSoCxHqf40HVO5zMbKmSA28a0QDzroXCNRYS-9wDP6c.cxu38ulTGDspsoKbPwObVba-WekTbvoLKTFwb9-lWn0&dib_tag=se&keywords=%22Logitech+StreamCam%22%2C&qid=1740404421&sprefix=logitech+streamcam+%2Caps%2C84&sr=8-12"
    },
    {
      "id": 15,
      "name": "CORSAIR K100 RGB Optical-Mechanical Wired Gaming Keyboard",
      "price": "€265.19",
      imageSrc: keyboard,
      "buyLink": "https://www.amazon.co.uk/Corsair-Optical-Mechanical-Keyboard-CORSAIR-Keyswitches/dp/B08K2Y17QS/ref=sr_1_3?crid=373BY3M639WQ&dib=eyJ2IjoiMSJ9.4TtdNCJTFty2mOVeCszlzyOkiNNrf1o9vsZk7zLnAYPoe4y2UnShPHZacNzizB7nCihesgrLq42jDfMQC4Yj2Aw8y7VrMinrvdqNmS0kLktazGQuADxoMCpP0JAhk8vTMuRx1ngcizDUNF-y26wtJchXLn0cmjwQ-eXYZXmOyTUWys5SfXngRVcsP688Bk4Yc2XXifawLBNEtwltRFpH0vWuDdy4QBIM1QNOAfIyOmE.dSCj-17fAuBtW6ZjBMzrL6iuRE1Rs0wpK6QQ3HY76_s&dib_tag=se&keywords=Corsair%2BK95%2BRGB%2BMechanical%2BKeyboard&qid=1740404569&sprefix=corsair%2Bk95%2Brgb%2Bmechanical%2Bkeyboard%2Caps%2C133&sr=8-3&th=1"
    },
    {
      "id": 16,
      "name": "Elgato Wave 3 Microphone",
      "price": "€158.16",
      imageSrc: mic3,
      "buyLink": "https://www.amazon.co.uk/Elgato-Wave-Microphone-Anti-Clipping-Technology/dp/B088HHWC47/ref=sr_1_5?crid=1NJ9H2GQJV9K&dib=eyJ2IjoiMSJ9.hAwDzyu3SqrZ7YIpj78SPzOg8hfClANNMEv2PLa_aMzt9YB7-LRT5q-C6tu_J34evK2GdOL3Xb_6UwBbea84V8yQRqh3XvLcYgw91rgjiFCHvQMMoeJmHMvMaEKBYVnA5Ka58hsAWTSUd9rViNWjRnbn_GcPCgfN12urEaLR0osSZBRBIGXioAJSPZVUNaANjkoYZOF6HWX9GUorOBy29E__sWGFbC4XgsZ9pY-FbidJbJKRoqcjRty0lYbEVgyW9baEl3ikcczbHzVfG1BQNpVi9_T7hSY3uEWzmontHPMMyAhb2ea3lz14O_kWFnRUot5bHuYinaYEL46m1--6gCSwJfkMObatR4x3hrmAvkzS55W39HmmkyTx0qSHs1VdV7XI8fEJs9Cphs9XvDZzPW_EdpyNuWUZJZiDEtIL8A-QYnchoZB95aeelubwVgwE.RQoAsRuY7UU37clRUjB7psOfQva5jwhBptiDxA7UT3c&dib_tag=se&keywords=Elgato%2BWave%2B3%2BMicrophone&qid=1740404683&sprefix=elgato%2Bwave%2B3%2Bmicrophone%2Caps%2C126&sr=8-5&th=1"
    },
    {
      "id": 17,
      "name": "Razer Huntsman V3 Pro",
      "price": "€227.83",
      imageSrc: razerKeyboard,
      "buyLink": "https://www.amazon.co.uk/Razer-Huntsman-Pro-Adjustments-Multi-function/dp/B0CDC2VLF4/ref=sr_1_3?crid=QGA3OXBUZVAO&dib=eyJ2IjoiMSJ9.20WW30necfPmPOKVl_7l50swLCp481J2MDirTLjZjilQtXg1fmqHADI4QHdrlbLebYgv9DcGsO5n2owPZ7wyKjodzwwoXnDe2gov0dLk1expTr_rJJkwP6xmjUaf6xD5Nb2flpqTaWWhCg3Dg_lZO7SPzP6xdOX6kOTdTqRaO4O0uzNqZLaEtJK-qjLIavLTvFkzkmtA7831U_dI7_nxpR16EnMLqwkPdC2CbgBMj1Y.0PPkH6pjC8YBaRlG0iynJzTYHXI7Yy-9NDNCT7-ucck&dib_tag=se&keywords=razer%2Bkeyboard&qid=1740404810&sprefix=razer%2B%2Caps%2C91&sr=8-3&th=1"
    },
    {
      "id": 18,
      "name": "Bestier Gaming Desk",
      "price": "€118.61",
      imageSrc: desk,
      "buyLink": "https://www.amazon.co.uk/Bestier-Outlets-Computer-Monitor-Workstation/dp/B0DB5KGCPV/ref=sr_1_3_sspa?crid=B1S16T91OP0L&dib=eyJ2IjoiMSJ9.DCYwxxJeADr3yn5fs1eHwKNhF-6A2N3Tb6kLsJd8pvno8-U4TZTwrKaJZlWCDE5XA2ZXpSjF_d_iTjBSP_q3wVOglkPQFZ_gQxCuonsVOaVp8MN6fox_IWEfdxTp1e6gZnXI3GgolrXM7XaF10FRoDNprjT9AYpy7dHxeODAaUUPkZ2_vCei2aEncRfpNAVrEDbEDHu9-5jfiyKDAgpsGRvNfD54Ep_NU968-3tbc5n_DentATIvJ2HSHy8tAyRXiaMKzPfs25IwGeCUE9dl7E2qXDD310eJ7i9Kmr0g_zY.fmyvMMtNczXn8g0fv2XnFepC7BkaJw_sgrnwiRM5s-k&dib_tag=se&keywords=Customizable%2BDesk&qid=1740404943&sprefix=customisable%2Bdesk%2Caps%2C154&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
    }
]

  return (
    <div className="shop-container">
      <Header2 />
      <div className="spacer"></div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div
              className="cover"
              style={{ backgroundImage: `url(${product.imageSrc})` }}
            >
              <h1>{product.name}</h1>
              <span className="price">{product.price}</span>
              <div className="card-back">
                <a href={product.buyLink} className="buy-now" target="_blank" rel="noopener noreferrer">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .shop-container {
            text-align: center;
            padding: 50px 20px;
            background-color: #FFFFFF;
            min-height: 100vh;
            max-width: 1200px;
            margin: 0 auto;
          }

          .spacer {
            margin-top: 80px;
          }

          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            padding: 20px;
          }

          .product-card {
            background: #FFFFFF;
            border-radius: 15px;
            box-shadow: 0 6px 12px rgba(111, 109, 178, 0.3);
            text-align: center;
            overflow: hidden;
            transition: transform 0.6s ease-in-out, box-shadow 0.3s ease-in-out;
            perspective: 1000px;
          }

          .product-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(111, 109, 178, 0.5);
          }

          .cover {
            position: relative;
            height: 400px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            transition: all 0.6s ease-in-out;
            transform-style: preserve-3d;
          }

          .cover h1 {
            position: absolute;
            bottom: 55px;
            left: 50px;
            color: #78C288;
            font-weight: 600;
            font-size: 2em;
             text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* 3D shadow effect */
             background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for contrast */
            padding: 5px 10px; /* Padding to ensure the background doesn't touch the text */
           
          }

          .cover .price {
            position: absolute;
            top: 55px;
            right: 50px;
            color: #78C288; /* White color for better contrast */
            font-weight: 700; /* Make it bold for more impact */
            font-size: 2.5em; /* Slightly larger for better visibility */
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* 3D shadow effect */
            text-transform: uppercase; /* Make the price uppercase to add emphasis */
            letter-spacing: 1px; /* Spacing between letters for a clean look */
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for contrast */
            padding: 5px 10px; /* Padding to ensure the background doesn't touch the text */
            border-radius: 5px; /* Rounded corners for the background */
          }


          .card-back {
            position: absolute;
            height: 100%;
            width: 100%;
            background: #1B1B1B;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            opacity: 0;
            transform: rotateY(180deg);
            transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
            flex-direction: column;
          }

          .product-card:hover .cover {
            transform: rotateY(180deg);
          }

          .product-card:hover .card-back {
            opacity: 1;
          }

          .product-card:hover .cover::before {
            background-color: black;
            opacity: 1;
            transition: opacity 0.6s ease-in-out;
          }

          .buy-now {
            display: inline-block;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            background-color: #6F6DB2;
            color: #FFFFFF;
            text-decoration: none;
            border-radius: 8px;
            transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
          }

          .buy-now:hover {
            background-color: #78C288;
            color: #1B1B1B;
            transform: scale(1.1);
          }

          @media (max-width: 1024px) {
            .product-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .product-grid {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Shop2;
