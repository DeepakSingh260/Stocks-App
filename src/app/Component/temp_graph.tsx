export const TempGrapgh=()=>{

    return(

<span aria-label="Past year of activity">
    <svg width="155" height="30">
      <defs>
        <linearGradient id="gradient-406661559" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stop-color="var(--color-calendar-graph-day-L1-bg)"></stop>
          <stop offset="10%" stop-color="var(--color-calendar-graph-day-L2-bg)"></stop>
          <stop offset="25%" stop-color="var(--color-calendar-graph-day-L3-bg)"></stop>
          <stop offset="50%" stop-color="var(--color-calendar-graph-day-L4-bg)"></stop>
        </linearGradient>
        <mask id="sparkline-406661559" x="0" y="0" width="155" height="28" >
          <polyline transform="translate(0, 28) scale(1,-1)"
                    points="0,12.9 3,16.4 6,7.3 9,17.6 12,11.6 15,10.2 18,16.3 21,16.8 24,12.3 27,29.0 30,14.6 33,9.2 36,11.9 39,19.4 42,17.2 45,12.1 48,9.3 51,7.2 54,10.9 57,15.9 60,13.6 63,11.7 66,14.5 69,19.6 72,8.2 75,4.8 78,5.0 81,21.2 84,16.5 87,10.2 90,10.6 93,6.6 96,14.3 99,14.2 102,15.7 105,10.1 108,8.5 111,16.8 114,12.9 117,10.1 120,5.6 123,12.1 126,11.1 129,23.5 132,13.2 135,2.8 138,9.9 141,8.8 144,10.2 147,10.2 150,15.5 153,8.7 " fill="transparent" stroke="#8CC665" stroke-width="2"/>
        </mask>
      </defs>
      <g transform="translate(0, 2.0)">
        <rect x="0" y="-2" width="155" height="30"
              style={{stroke: "none" , fill: 'url(#gradient-406661559)', mask: 'url(#sparkline-406661559)'}}></rect>
      </g>
    </svg>
  </span>
  )
  }