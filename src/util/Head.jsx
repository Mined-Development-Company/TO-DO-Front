import React, { useEffect } from 'react'

export const Head = (props) => {
	useEffect(() => {
		document.title = 'MINED - ' + props.title
	}, [props])

	return <></>
}
