/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';

export class ExperienceComponent extends Component {

    render() {
        return (
            <div className="experience">
                {this.props.experience.company}
            </div>
        );
    }
}