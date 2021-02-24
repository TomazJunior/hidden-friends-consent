import React from 'react'
import {
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react'

import logo192 from '../img/logo192.png'
import mainScreenshoot from '../img/i-am-joe.jpg'

export const HiddenFriendsPage = () => {
    return (
        <div className="info">
            <Segment clearing className="header-component">
                <Header as="h3" floated="left">
                    <Image src={logo192} />
                    <Header.Content>Hidden Friends</Header.Content>
                </Header>
            </Segment>

            <Grid style={{ margin: '10rem 0 0 0' }}>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header
                            as="h2"
                            icon
                            textAlign="center"
                            content="Join in our adventure to find our hidden friends"
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center" width={16}>
                        <Image centered size="massive" src={mainScreenshoot} />
                        <Segment
                            className="card-info"
                            size="big"
                            textAlign="center"
                        >
                            <p>
                                There are many worlds and levels to be explored
                                and new challenges will be gradually added. And
                                in the meantime your brain will be tested and
                                exercised in a very cool way.
                            </p>
                            <p>
                                Hidden Friends is game to enjoy and train your
                                concentration. Each world has different
                                challenges and as the levels increase will
                                require more attention.
                            </p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
