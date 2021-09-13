import { TwitterCircleFilled } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Asgard | Meta-verse</title>
        <meta name="description" content="Asgard - Play2Earn / Stream2Earn" />
        <link rel="icon" href="/asgard-logo.jpeg" type="image/x-icon" />
      </Head>

      <Row
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          backgroundColor: "#272727",
        }}
      >
        <Col span={24} style={{ textAlign: "center" }}>
          <h1
            style={{
              color: "white",
              fontSize: "3rem",
              fontWeight: "bolder",
              margin: 0,
              padding: 0,
            }}
          >
            ASGARD
          </h1>
        </Col>
      </Row>
      <Row
        style={{
          width: "100%",
          height: "90vh",
          margin: 0,
          padding: 0,
          backgroundColor: "white",
          backgroundImage: "url('/background-img.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Col
          span={24}
          style={{
            textAlign: "center",
            width: "100%",
            height: "100%",
            marginTop: "15%",
          }}
        >
          <h3 style={{ color: "white", fontSize: "2rem", textAlign: "center" }}>
            A Decentralized Play2Earn and
            <br /> Stream2Earn Platform for Gamers,
            <br />
            Vloggers, Creatives and Viewers
          </h3>
          <Button
            style={{
              height: "auto",
              padding: "10px 30px",
              minWidth: 210,
              marginRight: 20,
              background: "rgba(225,225,225, .5)",
              color: "black",
            }}
            type="link"
          >
            JOIN
            <br /> PRESALE
          </Button>
          <Button
            style={{
              height: "auto",
              padding: "10px 30px",
              minWidth: 210,
              background: "rgba(225,225,225, .5)",
              color: "black",
            }}
            type="link"
          >
            JOIN THE
            <br /> COMMUNITY
          </Button>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        style={{
          width: "100%",
          margin: 0,
          padding: "10% 10%",
          backgroundColor: "#272727",
        }}
      >
        <Col
          xs={{ span: 24 }}
          lg={{ span: 12 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
            padding: 50,
          }}
        >
          <h1 style={{ color: "white" }}>INTRODUCING ASGARD</h1>
          <p style={{ color: "white" }}>
            ASGARD is a decentralized and censor resistant stream to earn and
            play to earn platform that is built for the community to earn for
            every activity that takes place on the platform.
          </p>
          <p style={{ color: "white" }}>
            Monetary value for streaming your favourite video and music and even
            listening to your choice podcast.
            <br />
            Playing the games on the metaverse, you get paid for your time and
            efforts.
          </p>
          <p style={{ color: "white" }}>
            You get paid for anything you do on ASGARD multiverse platform. The
            future of content and acitvities on the blockchain is wealth for
            all.
          </p>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div
            style={{
              height: 640,
              minHeight: "40vh",
              backgroundImage: "url('/intro-bg.png')",
              backgroundPosition: "center",
              backgroundSize: "80%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </Col>
      </Row>
      <Row
        style={{
          width: "100%",
          // height: 400,
          margin: 0,
          padding: "10% 10%",
          backgroundColor: "black",
          backgroundImage: "url('/astra-galaxy.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Col
          span={24}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "3rem",
              margin: 0,
              fontWeight: "bolder",
            }}
          >
            10,000,000
          </h1>
          <h3
            style={{
              color: "white",
              fontSize: "3rem",
              margin: 0,
              fontWeight: "bolder",
            }}
          >
            Fixed Limited supply
          </h3>
        </Col>
      </Row>
      <Row
        style={{
          width: "100%",
          height: "auto",
          margin: 0,
          padding: "10% 10%",
          backgroundColor: "#272727",
        }}
        id="tokenomics"
      >
        <Col
          span={24}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // padding: "20px 10px",
          }}
        >
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}>
            ASGARD TOKENOMICS
          </h1>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white",
              textAlign: "left",
            }}
          >
            The ASGARD big picture aims to place the project at the forefront of
            streaming, gaming and
            <br /> crypto. Not satisfied with wallowing in the mass of
            meme-coins, gaming, streaming and
            <br /> shallow projects we are determined to put the project on a
            pathway to the stability and utility
            <br /> often associated with established projects.
          </p>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white",
              textAlign: "left",
            }}
          >
            We have already begun the process of building a world class
            metaverse - the ASGARD
            <br /> METAVERSE, where our utility will be truly realized. Through
            strategic gaming and creator
            <br /> partnerships and competitions, we are building a place for
            gamers, content creators, digital
            <br /> artist, content consumer and crypto enthusiasts to coalesce,
            where they will trade exclusive
            <br /> NFTs, tip one another in ASGARD TOKEN and even stream right
            from the app.
          </p>
          <div
            style={{
              backgroundImage: "url('/tokenomics.png')",
              backgroundPosition: "60px center",
              backgroundSize: "90%",
              backgroundRepeat: "no-repeat",
              height: 350,
              width: "100%",
            }}
          ></div>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        style={{
          width: "100%",
          height: "auto",
          margin: 0,
          padding: "10% 10%",
          backgroundColor: "#000",
        }}
      >
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          style={{}}
          id="p2e"
        >
          <div
            style={{
              backgroundImage: "url('/metaverse.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              border: "1px solid rgba(225,225,225,.6)",
              borderRadius: "20px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 200,
            }}
          >
            <h1
              style={{ color: "white", fontSize: "2rem", textAlign: "center" }}
            >
              PLAY TO EARN
              <br />
              (ASGARD METAVERSE)
            </h1>
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          style={{}}
          id="s2e"
        >
          <div
            style={{
              border: "1px solid rgba(225,225,225,.6)",
              borderRadius: "20px",
              backgroundImage: "url('/odin-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 200,
            }}
          >
            <h1
              style={{ color: "white", fontSize: "2rem", textAlign: "center" }}
            >
              STREAM TO EARN
              <br />
              (ODIN)
            </h1>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <div
            style={{
              border: "1px solid rgba(225,225,225,.6)",
              borderRadius: "20px",
              backgroundImage: "url('/valhala-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 200,
            }}
          >
            <h1
              style={{ color: "white", fontSize: "2rem", textAlign: "center" }}
            >
              NFT MARKETPLACE
              <br />
              (VALHALLA)
            </h1>
          </div>
        </Col>
      </Row>
      <Row
        gutter={[32, 32]}
        id="road-map"
        style={{
          width: "100%",
          height: "auto",
          margin: 0,
          padding: "10% 10%",
          backgroundColor: "#000",
          backgroundImage: "url('/road-map-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Col
          xs={{ span: 24, order: 2 }}
          md={{ span: 12, order: 1 }}
          lg={{ span: 12, order: 1 }}
        >
          <h3 style={{ textAlign: "left", color: "white" }}>Q1 THOR</h3>
          <p style={{ textAlign: "left", color: "white" }}>
            Building The Community Presale ✓BSC Network Integration (bridged)
            Ethereum Network Integration (bridged) Coingecko and Coinmarketcap
            listing Dex Listing (Pancakeswap and Uniswap) ✓Exchange Listings
            (Kucoin and Gate.io) ✓Strategic Partnerships with creators
          </p>
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          md={{ span: 12, order: 2 }}
          lg={{ span: 12, order: 2 }}
        >
          <h1 style={{ color: "white", fontSize: "2rem", textAlign: "center" }}>
            ROAD TO ASGARD
          </h1>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12, order: 3 }}
          lg={{ span: 12 }}
        ></Col>
        <Col
          xs={{ span: 24, order: 3 }}
          md={{ span: 12, order: 4 }}
          lg={{ span: 12 }}
        >
          <h3 style={{ textAlign: "left", color: "white" }}>Q2 LOKI</h3>
          <p style={{ textAlign: "left", color: "white" }}>
            Smart Contract Audit -By Certik VALHALLA NFT Marketplace beta launch
            ⧖ Collaboration With Influencers ⧖ More Exchange Listings (Hotbit,
            dodoex, Latoken) NFT Collaboration With Digital Artists ⧖
            Partnerships With Other Projects ⧖ Launch On Polygon Network
          </p>
        </Col>
        <Col
          xs={{ span: 24, order: 4 }}
          md={{ span: 12, order: 5 }}
          lg={{ span: 12 }}
        >
          <h3 style={{ textAlign: "left", color: "white" }}>Q3 HELA</h3>
          <p style={{ textAlign: "left", color: "white" }}>
            ASGARD Metaverse Play to Earn Launch ODIN Streaming to earn beta
            launch VALHALLA NFT Marketplace launch ⧖ Collaboration With more
            Influencers More Exchange Listings ⧖ NFT Collaboration With Digital
            Artists ⧖ Partnerships With Other Projects ⧖ Launch On Polygon
            Network
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12, order: 6 }}
          lg={{ span: 12 }}
        ></Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12, order: 7 }}
          lg={{ span: 12 }}
        ></Col>
        <Col
          xs={{ span: 24, order: 5 }}
          md={{ span: 12, order: 8 }}
          lg={{ span: 12 }}
        >
          <h3 style={{ textAlign: "left", color: "white" }}>Q4 Heimdall</h3>
          <p style={{ textAlign: "left", color: "white" }}>
            Airdrop to hodlers (10% of total supply) ODIN Streaming to earn
            launch ⧖ Collaboration With more Influencers More Exchange Listings
            ⧖ NFT Collaboration With Digital Artists ⧖ Launch On more networks
          </p>
        </Col>
      </Row>
      <Row
        gutter={[32, 32]}
        style={{
          width: "100%",
          height: "auto",
          margin: 0,
          padding: "5% 10%",
          backgroundColor: "black",
        }}
      >
        <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
          <h1
            style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#40B3E0" }}
          >
            JOIN THE COMMUNITY AND BECOME
            <br /> WORHTY FOR PRESALE
          </h1>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <a href="https://telegram.org">
            <div className="telegram-thumbnail"></div>
          </a>
          <a href="https://twitter.com">
            <TwitterCircleFilled style={{ fontSize: 50, color: "#40B3E0" }} />
          </a>
        </Col>
      </Row>
      <Row
        gutter={[32, 32]}
        style={{
          width: "100%",
          height: "auto",
          margin: 0,
          padding: "5% 10%",
          backgroundColor: "black",
        }}
      >
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <h1 style={{ color: "white", textAlign: "center" }}>Community</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href="https://telegram.org" style={{ marginRight: 20 }}>
              <div className="telegram-thumbnail-sm"></div>
            </a>
            <a href="https://twitter.com">
              <TwitterCircleFilled style={{ fontSize: 30, color: "#40B3E0" }} />
            </a>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <h1 style={{ color: "white", textAlign: "center" }}>Sitemap</h1>
          <ul className="sitemap">
            <li>
              <a href="#tokenomics">Tokenomics</a>
            </li>
            <li>
              <a href="#p2e">Play 2 Earn</a>
            </li>
            <li>
              <a href="#">Pre-sale</a>
            </li>
            <li>
              <a href="#s2e">Stream 2 Earn</a>
            </li>
            <li>
              <a href="#road-map">Roadmap</a>
            </li>
            <li>
              <a href="#">NFT Marketplace</a>
            </li>
          </ul>
        </Col>
        <Col span={24}>
          <h3 style={{ color: "white", textAlign: "center" }}>
            Copyright © 2021 Asgard, All rights reserved
          </h3>
        </Col>
      </Row>
      <style jsx global>{`
        .telegram-thumbnail {
          width: 50px;
          height: 50px;
          display: inline-block;
          background-image: url("/telegram-logo.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .telegram-thumbnail-sm {
          width: 30px;
          height: 30px;
          display: inline-block;
          background-image: url("/telegram-logo.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .sitemap {
          color: white;
          list-style-type: none;
          list-style: none;
          text-align: center;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
}