import {t} from '@lingui/macro'
import TransMarkdown from 'components/ui/TransMarkdown'
import CONTRIBUTORS, {ROLES} from 'data/CONTRIBUTORS'
import {Meta} from 'parser/core/Meta'
import React from 'react'
import {Icon, Message} from 'semantic-ui-react'

const description = t('pld.about.description')`As the illegitimate child of a WHM and BLM, you chose the Gory Path of a shield lobing, sword swinging Mage, that also tries to help everybody out.

This analyzer attempts to find just the right things to get you to be a fearsome Tank, that will show no [~action/CLEMENCY] to his enemies, while being the true [~action/HOLY_SPIRIT] of the Party.
`

const descriptionWarning = t('pld.about.description.warning')`
**Here be Dragons**

This Analyzer is still **Work in Progress** and is missing a lot of features as well as simplifying a couple of things for now.

Make sure to take the advice still with a grain of Salt.

If you notice any issues, have concerns or suggestions, please drop by our Discord channel!
`

export default new Meta({
	modules: () => import('./modules' /* webpackChunkName: "jobs-pld" */),

	Description: () => <>
		<TransMarkdown source={description} key="pld.about.description"/>
		<Message warning icon>
			<Icon name="warning sign"/>
			<Message.Content>
				<TransMarkdown source={descriptionWarning} key="'pld.about.description.warning'"/>
			</Message.Content>
		</Message>
	</>,
	// supportedPatches: {
	// 	from: '4.2',
	// 	to: '4.5',
	// },
	contributors: [
		{user: CONTRIBUTORS.MIKEMATRIX, role: ROLES.MAINTAINER},
	],

	changelog: [
	],
})
