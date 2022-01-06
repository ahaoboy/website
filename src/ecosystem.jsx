import useThemeContext from '@theme/hooks/useThemeContext'
import React from 'react'

export function Ecosystem() {
  const { isDarkTheme } = useThemeContext()
  return (
    <p align="left" style={{ width: '70vw' }}>
      <a href="https://www.prisma.io/" target="_blank">
        <svg
          height="50"
          viewBox="0 0 90 24"
          fill={isDarkTheme ? 'white' : 'black'}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="logoTitle"
        >
          <title id="logoTitle">Prisma.io</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.736 11.947h.9c.842 0 1.471-.168 1.89-.502.417-.335.626-.822.626-1.462 0-.645-.175-1.122-.525-1.43-.35-.308-.899-.462-1.646-.462h-1.245v3.856zm6.179-2.061c0 1.398-.434 2.466-1.303 3.206-.867.741-2.101 1.11-3.702 1.11h-1.174v4.62H32V5.835h4.122c1.565 0 2.755.34 3.57 1.017.815.678 1.223 1.69 1.223 3.034zM48.167 8.704c.365 0 .668.027.91.08l-.203 2.54a3.08 3.08 0 00-.795-.088c-.859 0-1.528.222-2.008.666-.48.444-.72 1.066-.72 1.866v5.054H42.66V8.891h2.039l.397 1.67h.132a3.726 3.726 0 011.24-1.346c.521-.34 1.087-.51 1.7-.51zM50.505 18.822h2.692V8.891h-2.692v9.931zM50.39 6.323c0-.882.489-1.323 1.465-1.323.977 0 1.466.441 1.466 1.323 0 .421-.122.748-.366.982-.245.234-.611.35-1.1.35-.976 0-1.465-.443-1.465-1.332zM62.675 15.873c0 1.019-.352 1.795-1.055 2.328-.703.532-1.755.799-3.155.799-.719 0-1.33-.049-1.836-.147a6.904 6.904 0 01-1.421-.43v-2.24c.5.238 1.063.436 1.69.596.627.16 1.178.24 1.655.24.977 0 1.465-.284 1.465-.853a.715.715 0 00-.194-.52c-.13-.133-.353-.284-.67-.453a16.977 16.977 0 00-1.272-.59c-.759-.32-1.317-.616-1.672-.889a2.488 2.488 0 01-.777-.937c-.162-.352-.243-.786-.243-1.301 0-.883.34-1.565 1.02-2.048.68-.482 1.642-.724 2.89-.724 1.189 0 2.345.261 3.469.782l-.812 1.954a14.913 14.913 0 00-1.386-.524 4.326 4.326 0 00-1.315-.204c-.794 0-1.192.216-1.192.648 0 .243.129.454.384.631.257.178.817.441 1.682.79.77.315 1.336.608 1.695.88.358.273.623.586.794.942.17.355.256.779.256 1.27zM73.34 18.822h-2.693v-5.8c0-.717-.119-1.255-.357-1.613-.238-.358-.613-.537-1.125-.537-.689 0-1.189.254-1.5.764-.313.51-.469 1.347-.469 2.514v4.672h-2.692V8.891h2.057l.362 1.27h.15a2.741 2.741 0 011.147-1.07c.5-.258 1.074-.387 1.722-.387 1.477 0 2.477.486 3 1.457h.239c.265-.462.654-.82 1.17-1.075.514-.255 1.095-.382 1.743-.382 1.118 0 1.964.289 2.537.866.574.578.86 1.503.86 2.776v6.476h-2.7v-5.8c0-.717-.12-1.255-.358-1.613-.238-.358-.613-.537-1.125-.537-.66 0-1.152.237-1.479.71-.326.474-.49 1.226-.49 2.257v4.983zM87.326 14.22l-1.042.036c-.783.024-1.365.166-1.747.427-.383.26-.574.657-.574 1.19 0 .764.435 1.146 1.306 1.146.624 0 1.123-.18 1.496-.542.374-.361.56-.84.56-1.44v-.816zm.794 4.602l-.52-1.35h-.072c-.453.575-.919.973-1.399 1.195-.479.222-1.104.333-1.875.333-.948 0-1.693-.273-2.238-.817-.544-.545-.816-1.32-.816-2.328 0-1.054.366-1.831 1.099-2.332.733-.5 1.837-.777 3.314-.83l1.713-.053v-.436c0-1.006-.512-1.51-1.536-1.51-.789 0-1.716.24-2.78.72l-.892-1.83c1.136-.598 2.395-.898 3.778-.898 1.324 0 2.339.29 3.045.871.706.58 1.059 1.463 1.059 2.647v6.618h-1.88zM18.01 19.037L7.163 22.224a.454.454 0 01-.58-.52L10.46 3.267c.073-.345.552-.4.704-.08l7.173 15.138a.514.514 0 01-.327.713zm1.86-.752L11.562.757a1.333 1.333 0 00-1.136-.755 1.32 1.32 0 00-1.213.626l-9.009 14.5c-.279.451-.273 1.008.016 1.455l4.404 6.778a1.419 1.419 0 001.59.581l12.782-3.756c.392-.116.712-.39.88-.756a1.354 1.354 0 00-.008-1.145z"
          ></path>
        </svg>
      </a>
      &nbsp; &nbsp;
      <a href="https://swc.rs/" target="_blank">
        <img
          alt="swc"
          src="https://raw.githubusercontent.com/swc-project/logo/master/swc.png"
          height="50"
        />
      </a>
      &nbsp; &nbsp;
      <a href="https://parceljs.org/" target="_blank">
        <img
          alt="Parcel"
          src="https://user-images.githubusercontent.com/19409/31321658-f6aed0f2-ac3d-11e7-8100-1587e676e0ec.png"
          height="50"
        />
      </a>
      &nbsp; &nbsp;
      <a href="https://nextjs.org/">
        <img
          alt="next.js"
          src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
          height="50px"
        />
        &nbsp;
        <svg
          height="50"
          viewBox="0 0 148 90"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
            fill={isDarkTheme ? 'white' : 'black'}
            fillRule="nonzero"
          ></path>
        </svg>
      </a>
    </p>
  )
}
