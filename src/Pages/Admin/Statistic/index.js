import { Area } from "@ant-design/charts"
import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    LikeOutlined
} from "@ant-design/icons"
import { Card, Col, Row, Statistic } from "antd"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import React from "react"

const StatisticPage = () => {
    const data = [
        { year: "01/2021", value: "140 tr" },
        { year: "02/2021", value: "130 tr" },
        { year: "03/2021", value: "130 tr" },
        { year: "04/2021", value: "150 tr" },
        { year: "05/2021", value: "155 tr" },
        { year: "06/2021", value: "155 tr" },
        { year: "07/2021", value: "150 tr" },
        { year: "08/2021", value: "150 tr" },
        { year: "09/2021", value: "168 tr" },
        { year: "10/2021", value: "180 tr" },
        { year: "11/2021", value: "190 tr" },
        { year: "12/2021", value: "200 tr" }
    ]

    const config = {
        data,
        xField: "year",
        yField: "value",
        point: {
            size: 5,
            shape: "diamond"
        },
        annotations: [
            {
                type: "text",
                position: ["min", "median"],
                content: "Mức doanh thu ổn",
                // offsetY: -4,
                style: { textBaseline: "bottom" }
            },
            {
                type: "line",
                start: ["min", "median"],
                end: ["max", "median"]
            }
        ]
    }
    return (
        <>
            <BreadcrumbField list={["Admin", "Thống kê"]} />
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Lượt tương tác trong tuần"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Lượt mua"
                            value={0.98}
                            precision={2}
                            valueStyle={{ color: "#cf1322" }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Feedback"
                            value={1128}
                            prefix={<LikeOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Để lại đánh giá"
                            value={70}
                            suffix="/ 100"
                        />
                    </Card>
                </Col>
            </Row>
            <Area {...config} />
        </>
    )
}

export default StatisticPage
