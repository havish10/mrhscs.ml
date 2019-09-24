import { Container, Row, Col } from 'react-grid-system'
import Layout from '../components/Layout'
import Scroll from '../components/Scroll'

export default () => (
  <Layout>
    <div style={{ textAlign: 'center', paddingTop: '17vh' }}>
      <Scroll>
        {scroll => (
          <div
            style={{
              transform: `scale(${Math.max(
                1,
                1.35 - scroll / 500,
              )}) translateY(${Math.min(200, scroll)}px)`,
              marginBottom: '175px',
            }}
          >
            <img
              style={{
                textAlign: 'center',
                background: 'black',
                width: '20em',
              }}
              alt="Club Logo"
              src="https://ipfs.yellowiki.xyz/ipfs/QmPApcKgZHbw4UEHVwADqMLV8wRVrpXbhV3kSBFUYCTmH8"
            />
            <Scroll minScroll={50}>
              <p>
                <a href="https://github.com/MRHS-Programming">[GitHub]</a>{' '}
                <a href="https://groupme.com/join_group/53521502/ygbNwc0O">
                  [GroupMe]
                </a>
              </p>
              <p>
                <b>Tuesdays @ Room 121</b>
              </p>
            </Scroll>
          </div>
        )}
      </Scroll>
    </div>

    <div style={{ height: '100px' }} />

    <Container>
      <Scroll minScroll={150}>
        <Row justify="between">
          <Col md={6}>
            <h1>About</h1>
            <p>
              Learn how to develop and build software projects. Teams compete in
              competitions.
            </p>

            <h1>Leadership</h1>
            <p>Jeffrey Yang [President]</p>
            <p>Havish Netla [President]</p>
            <p>Daniel Huang [Captain]</p>
            <p>Max Hollis [Captain]</p>
            <p>Satya Selvam [Officer]</p>
            <p>Tanishq Ahuja [Officer]</p>
          </Col>

          <Col md={4} style={{ margin: 4 }}>
            <h1>Schedule</h1>
            <p>2019-09-24 Next Meeting</p>
            <p>2019-09-27 PicoCTF Begins</p>
            <p>2019-11-01 CAC Submission</p>
          </Col>
        </Row>
      </Scroll>
    </Container>

    <div style={{ height: '200px' }} />
  </Layout>
)
