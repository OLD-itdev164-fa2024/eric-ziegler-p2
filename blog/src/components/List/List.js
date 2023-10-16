import React from "react";
import PropTypes from "prop-types";
import { BaseContainer } from "../BaseContainer";

export const List = ({ children, ...rest }) => (
    <BaseContainer
        flex
        flexDirection='column'
        mx='auto'
        as='ul'
        {...rest}
    >
        {children}
    </BaseContainer>
)

List.PropTypes = {
    children: PropTypes.node.isRequired
}