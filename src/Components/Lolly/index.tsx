import * as React from "react"

export default function Lolly(props) {
  return (
    <svg
      className="lollipop"
      width="163px"
      height="431px"
      viewBox="0 0 163 431"
      {...props}
    >
      <defs>
        <path
          d="M50.585 0h62.172c16.302 0 29.818 12.625 30.928 28.89l18.769 275c1.166 17.08-11.736 31.872-28.817 33.038a31 31 0 01-2.111.072H31c-17.12 0-31-13.88-31-31a31 31 0 01.078-2.202l19.585-275C20.818 12.573 34.318 0 50.585 0z"
          id="a"
        />
        <path
          d="M99 0h14c16.302 0 29.818 12.625 30.928 28.89l18.769 275c1.165 17.08-11.737 31.872-28.818 33.038a31 31 0 01-2.11.072h-14a31 31 0 002.11-.072c17.081-1.166 29.983-15.958 28.818-33.039l-18.769-275C128.818 12.625 115.302 0 99 0z"
          id="c"
        />
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g transform="translate(65 137)" fillRule="nonzero">
          <rect fill="#C06C50" x={0} y={2} width={32} height={292} rx={16} />
          <rect fill="#E3A28D" x={0} y={0} width={32} height={292} rx={16} />
          <path
            fillOpacity={0.181584013}
            fill="#8C0040"
            d="M0 200L32 200 32 218 0 223.801515z"
          />
        </g>
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use
          className="lollyBottom"
          fill="#deaa43"
          fillRule="nonzero"
          xlinkHref="#a"
        />
        <path
          className="lollyTop"
          fill="#d52358"
          fillRule="nonzero"
          mask="url(#b)"
          d="M-25 -9H199V125H-25z"
        />
        <path
          className="lollyMiddle"
          fill="#e95946"
          fillRule="nonzero"
          mask="url(#b)"
          d="M-29 113H195V224H-29z"
        />
        <path
          d="M79.77 0C63.468 0 49.952 12.625 48.842 28.89l-18.769 275c-1.166 17.08 11.736 31.872 28.817 33.038a31 31 0 002.111.072H17c-17.12 0-31-13.88-31-31a31 31 0 01.078-2.202l19.585-275C6.818 12.573 20.318 0 36.585 0H79.77z"
          fill="#67000D"
          fillRule="nonzero"
          opacity={0.0961449033}
          mask="url(#b)"
        />
        <mask fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <use
          fill="#FFF"
          fillRule="nonzero"
          opacity={0.113420759}
          xlinkHref="#c"
        />
        <g
          opacity={0.600144159}
          transform="rotate(-94 86.455 -37.419)"
          fill="#FFF"
          fillRule="nonzero"
        >
          <rect x={20} y={4.26325641e-14} width={4} height={4} rx={2} />
          <rect x={0} y={0} width={18} height={4} rx={2} />
        </g>
        <path
          d="M97 337H65V153c0-8.837 7.163-16 16-16s16 7.163 16 16v184z"
          fill="#A7563C"
          fillRule="nonzero"
          opacity={0.0615234375}
        />
      </g>
    </svg>
  )
}
