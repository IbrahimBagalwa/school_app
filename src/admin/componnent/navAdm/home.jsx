import React from 'react'
import FeatureInfo from '../featureInfo/featureInfo.component'
import WidgetSm from '../screen/widget.component'
import WidgetLg from '../screen/widgetLg.component'
import NavAdm from './navAdm'

export default function HomeAdmin() {
    return (
        <NavAdm>
            <div className="home">
                <div className="homeWidget">
                    {/* <WidgetLg/>
                    <WidgetSm/> */}
                </div>
            </div>
        </NavAdm>
    )
}
