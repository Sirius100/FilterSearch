import React from 'react';


import styles from './MapInfo.module.css';


class MapInfo extends React.Component {



  render() {
  	return (
  		<div className={styles.MapInfo}>
        <span>Схема компонента</span>
        <ol >
          <li style={{color: "bisque", fontSize: "20px",fontWeight: "900"}}>GlobalWrapper</li>
          <hr />
          <ul style={{listStyle: "none"}}>
            <li style={{ color: "darkcyan", }}>Wrapper</li>
            <ul style={{fontSize: "20px",fontWeight: "700" ,listStyle: "none"}}>
              <li style={{color:"rgb(94, 184, 21)"}}>Container</li>
              <ol style={{fontSize: "15px",fontWeight: "500" }}>
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
