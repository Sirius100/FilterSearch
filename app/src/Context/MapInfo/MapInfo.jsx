import React from 'react';


import styles from './MapInfo.module.css';


class MapInfo extends React.Component {



  render() {
  	return (
  		<div className={styles.MapInfo}>
        <span>Схема компонента</span>
        <ol>
          <li style={{color: "bisque", 'font-size': "20px",'font-weight': "900"}}>GlobalWrapper</li>
          <hr />
          <ul>
            <li style={{ color: "darkcyan", }}>Wrapper</li>
            <ul style={{'font-size': "20px",'font-weight': "700" }}>
              <li style={{color:"rgb(94, 184, 21)"}}>Container</li>
              <ol style={{'font-size': "15px",'font-weight': "500" }}>
                <li style={{color: "blue"}}>UpSubcontainer</li>
                <li style={{color: "white"}}>Button * 2</li>
                <li style={{color: "purple"}}>Count</li>
              </ol>

            </ul>
          </ul>
        </ol>
  		</div>
  	)
  }
}
export default MapInfo;
