import { Flex, Layout, Card, Masonry } from 'antd';
const { Header, Footer, Content } = Layout;

const heights = [150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 60, 50, 80].map(
    (height, index) => {
        const item = {
            key: `item-${index}`,
            data: height,
        };
        if (index === 0) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://images.unsplash.com/photo-1491961865842-98f7befd1a60?w=523&auto=format"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 1) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://cdn.loveandlemons.com/wp-content/uploads/2023/12/easy-vegetarian-dinner-recipes.jpg"
                            
                        />
                    }
                >
                    <Card.Meta title="I'm Tasty" description="Delicious Food" />
                </Card>
            );
        }
        if (index === 2) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://q-xx.bstatic.com/xdata/images/hotel/max500/415933232.jpg?k=92a58ed57069e7f1b6ea65f48d6c91cfae01e33b837b8e8014a1bd0542268837&o="
                        />
                    }
                >
                    <Card.Meta title="Comfort" description="Beautiful experience" />
                </Card>
            );
        }
        if (index === 3) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://www.akbartravels.com/in/blogs/wp-content/uploads/sites/2/2026/02/5-star-1.png"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 4) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0f/b7/39/restaurant.jpg?w=1200&h=-1&s=1"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 5) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://attaches.1001tur.ru/hotels/gallery/631462/450-450_lgmf179eddd7-66791660315813.jpg"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 5) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://images.trvl-media.com/lodging/2000000/1790000/1780800/1780778/bbfb6b6d.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 6) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUz6rk5UQ6h1I4ZxN5oN9VGmKRAHME8ZeSOA&s"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 7) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://2.bp.blogspot.com/-A8fNTw9i5ME/VK99kgXM2tI/AAAAAAAAGqg/kYHZm6BkQ1I/s1600/The%2BOberoi%2BMumbai.jpg"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 8) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUz6rk5UQ6h1I4ZxN5oN9VGmKRAHME8ZeSOA&s"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 9) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFmZmxlcyUyMGhvdGVsfGVufDB8fDB8fHww"

                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 10) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://images.trvl-media.com/lodging/7000000/6490000/6483900/6483808/b3b18c56.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 11) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 12) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptTSeigl2jMwxU4VQCxqesdv0VmtKexloFg&s"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 13) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://www.themaharajatrain.com/wp-content/uploads/2024/09/Explore-Rajasthan_s-cuisines-in-Maharajas_-Express-luxury-journey.webp"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 14) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://www.indiafoodnetwork.in/h-upload/2024/09/11/1355121-qey-1.webp"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        if (index === 15) {
            item.children = (
                <Card
                    size="small"
                    cover={
                        <img
                            alt="food"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTontJINTVXB-OOJgG2liB1FA8ENw2LRby3Qw&s"
                        />
                    }
                >
                    <Card.Meta title="I'm Special" description="Let's have a meal" />
                </Card>
            );
        }
        return item;
    },
);

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 800,
    lineHeight: '120px',
    color: '#fff',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '200px',
    maxWidth: '',
};

const About = () => {
    return (<div>
        <h1>About Us</h1>
        <Flex gap="medium" wrap>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}></Header>
                <Content style={contentStyle}>
                    <Masonry
                        columns={3}
                        gutter={15}
                        items={heights}
                        itemRender={({ data, index }) => (
                            <Card size="small" style={{ height: data }}>
                                {index + 1}
                            </Card>
                        )}
                    />
                </Content>
                <Footer style={footerStyle}></Footer>
            </Layout>
        </Flex>
    </div>
    )
}

export default About;