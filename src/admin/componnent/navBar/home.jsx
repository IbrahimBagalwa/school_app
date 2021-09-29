import React from 'react'
import FeatureInfo from '../featureInfo/featureInfo.component'
import WidgetSm from '../screen/widget.component'
import WidgetLg from '../screen/widgetLg.component'

export default function HomeAdmin() {
    return (
        <div>
            <div>
                <FeatureInfo/>
            </div>
            <div>
                <WidgetLg/>
            </div>
            <div>
                <WidgetSm/>
            </div>
        </div>
    )
}
