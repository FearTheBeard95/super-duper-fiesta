import { Card, BSmall, Button } from 'bootstrap-4-react';

function Featured() {
    return (
        <Card.Deck mb="3">
            <Card>
                <Card.Image src='http://vivaworkers.org/sites/default/files/slideshow/OP.jpg' top />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text><BSmall text="muted"><a>Read all</a></BSmall></Card.Text>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Image src='http://vivaworkers.org/sites/default/files/slideshow/OP.jpg' top />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text><BSmall text="muted"><a>Read all</a></BSmall></Card.Text>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Image src='http://vivaworkers.org/sites/default/files/slideshow/OP.jpg' top />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text><BSmall text="muted"><a>Read all</a></BSmall></Card.Text>
                </Card.Footer>
            </Card>
        </Card.Deck>
    )
}

export default Featured