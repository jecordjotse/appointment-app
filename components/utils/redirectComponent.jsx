import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

const RedirectComponent = ({ url }) => {
	const router = useRouter();

	useEffect(() => {
		if (window) router.push(url);
		// eslint-disable-next-line
  }, []);

	return <></>;
};

RedirectComponent.propTypes = {
	url: PropTypes.string
};

export default RedirectComponent;
