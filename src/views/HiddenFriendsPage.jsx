import React from 'react'
import {
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Segment,
} from 'semantic-ui-react'

import logo192 from '../img/logo192.png'
import mainScreenshoot from '../img/i-am-joe.jpg'
import googlePlayBadge from '../img/en_badge_web_generic.png'
import geniusMinigame from '../img/genius-minigame.jpg'
import player01 from '../img/player-1.gif'
import player02 from '../img/player-2.gif'

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
            <Grid style={{ margin: '10rem 0 0 0' }}>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as="h2" icon textAlign="center" color="blue">
                            <Icon name="game" circular />
                            <Header.Content>Mini Games</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as="h2" icon textAlign="center">
                            <Header.Content>Genius</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center" width={16}>
                        <Image size="large" centered src={geniusMinigame} />
                        <Segment
                            className="card-info"
                            size="big"
                            textAlign="center"
                        >
                            <p>
                                It creates a series of tones and random Hidden
                                Friends and requires a player to repeat the
                                sequence
                            </p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid style={{ margin: '10rem 0 0 0' }}>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as="h2" icon textAlign="center" color="blue">
                            <Icon name="user" circular />
                            <Header.Content>Characters</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as="h2" icon textAlign="center">
                            <Header.Content>Joe</Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header as="h2" icon textAlign="center">
                            <Header.Content>Robotix</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center" width={8}>
                        <Image centered src={player01} />
                        <Segment
                            className="card-info"
                            size="big"
                            textAlign="center"
                        >
                            <p>A Forest ranger who loves animals</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign="center" width={8}>
                        <Image centered src={player02} />
                        <Segment
                            className="card-info"
                            size="big"
                            textAlign="center"
                        >
                            <p>
                                A cute android who will help to find the hidden
                                Friends
                            </p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Segment
                textAlign="left"
                inverted
                vertical
                style={{ margin: '5em 0em 0em', padding: '2em 0em' }}
            >
                <Container>
                    <Header inverted as="h4">
                        Hidden Friends
                    </Header>
                    <Image
                        as="a"
                        src={googlePlayBadge}
                        href="https://play.google.com/store/apps/details?id=com.hiddenfriends.apprelease"
                        size="medium"
                        target="_blank"
                    />
                </Container>
            </Segment>
        </div>
    )
}
