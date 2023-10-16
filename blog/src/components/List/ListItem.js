import React from "react";
import PropTypes from "prop-types";
import { BaseContainer } from "../BaseContainer";

export const ListItem = ({ children, ...rest }) => (
    <BaseContainer as='li' {...rest}>
        {children}
    </BaseContainer>
)

ListItem.PropTypes = {
    children: PropTypes.node.isRequired
}