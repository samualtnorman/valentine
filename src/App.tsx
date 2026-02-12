import { createSignal, type Component } from "solid-js"
import logo from "./logo.svg"
import styles from "./App.module.css"
import heart from "./assets/heart.svg"

const Width = 32

const [ page, setPage ] = createSignal(0)

export default () => {
	return <>{
		page() == 0 ?
			<div
				style={{
					width: `${Width}rem`,
					height: `${Math.sqrt(2) * Width}rem`,
					background: `oklch(89.2% 0.058 10.001)`,
					"box-shadow": `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`,
					"border-top-right-radius": `.5rem`,
					"border-bottom-right-radius": `.5rem`,
					"margin-top": `2rem`,
					display: `flex`,
					// "justify-content": `center`,
					"flex-direction": `column`,
					"align-items": `center`,
					"cursor": `pointer`,
					"font-family": `Pacifico, cursive`
				}}
				onClick={() => setPage(1)}
			>
				<p style={{ "font-size": `2rem`, "margin-top": `4rem` }}>
				My Beloved Maya
				</p>
				<img src={heart} style={{
					width: `10rem`,
					"margin-top": `4rem`
				}}/>
			</div>
		: page() == 1 ?
			<>
				<div
					style={{
						width: `${Width}rem`,
						height: `${Math.sqrt(2) * Width}rem`,
						background: `oklch(96.9% 0.015 12.422)`,
						"box-shadow": `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`,
						"border-top-left-radius": `.5rem`,
						"border-bottom-left-radius": `.5rem`,
						"margin-top": `2rem`,
						display: `flex`,
						// "justify-content": `center`,
						"flex-direction": `column`,
						"align-items": `center`,
						"cursor": `pointer`
					}}
					onClick={() => setPage(0)}
				>
					<p style={{ "font-size": `2rem`, "margin-top": `4rem` }}>
					My Beloved Maya
					</p>
				</div>
				<div
					style={{
						width: `${Width}rem`,
						height: `${Math.sqrt(2) * Width}rem`,
						background: `oklch(96.9% 0.015 12.422)`,
						"box-shadow": `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`,
						"border-top-right-radius": `.5rem`,
						"border-bottom-right-radius": `.5rem`,
						"margin-top": `2rem`,
						display: `flex`,
						"justify-content": `space-around`,
						"flex-direction": `column`,
						"align-items": `center`,
						"cursor": `pointer`,
						"font-family": `sans-serif`,
						"font-size": `1.5rem`
					}}
					onClick={() => setPage(2)}
				>
					<p>Dear Maya,</p>

					<p>Happy Valentines Day!</p>

					<p>I love you so much</p>

					<p>Love Samual. {`<3`}</p>
				</div>
			</>
		: <p>Page doesn't exit</p>
	}</>
}
