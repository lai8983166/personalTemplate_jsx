import React, { useState } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCenter,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Row, Col, Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const CONTAINERS = ["source", "target"];
const initialItems = {
  source: [
    { id: "1", name: "拖拽项 1" },
    { id: "2", name: "拖拽项 2" },
    { id: "3", name: "拖拽项 3" },
    { id: "4", name: "拖拽项 4" },
  ],
  target: [],
};

export default function DragdropAnt() {
  const [itemsMap, setItemsMap] = useState(initialItems);
  const [activeContainer, setActiveContainer] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  function findContainer(id) {
    if (CONTAINERS.includes(id)) return id;
    return CONTAINERS.find((key) =>
      itemsMap[key].some((item) => item.id === id)
    );
  }

  function handleDragStart({ active }) {
    setActiveContainer(findContainer(active.id));
  }

  function handleDragOver({ active, over }) {
    if (!over) return;
    const from = findContainer(active.id);
    const to = findContainer(over.id);

    if (!from || from === to) return;

    setItemsMap((prev) => {
      const sourceItems = [...prev[from]];
      const destItems = [...prev[to]];
      const draggedIndex = sourceItems.findIndex((i) => i.id === active.id);
      const draggedItem = sourceItems.splice(draggedIndex, 1)[0];

      // if over is a container id, drop at end
      const destIndex = CONTAINERS.includes(over.id)
        ? destItems.length
        : destItems.findIndex((i) => i.id === over.id);

      destItems.splice(destIndex, 0, draggedItem);

      return {
        ...prev,
        [from]: sourceItems,
        [to]: destItems,
      };
    });

    setActiveContainer(to);
  }

  function handleDragEnd({ active, over }) {
    if (over && active.id !== over.id) {
      const container = findContainer(active.id);
      const to = findContainer(over.id);

      if (container && container === to) {
        setItemsMap((prev) => ({
          ...prev,
          [container]: arrayMove(
            prev[container],
            prev[container].findIndex((i) => i.id === active.id),
            prev[container].findIndex((i) => i.id === over.id)
          ),
        }));
      }
    }
    setActiveContainer(null);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Row gutter={20}>
        {CONTAINERS.map((containerId) => (
          <Col span={12} key={containerId}>
            <Title level={3}>
              {containerId === "source" ? "可拖拽源列表" : "放置／排序区"}
            </Title>

            <DroppableContainer id={containerId} items={itemsMap[containerId]}>
              <SortableContext
                items={itemsMap[containerId].map((i) => i.id)}
                strategy={verticalListSortingStrategy}
              >
                {itemsMap[containerId].map((item) => (
                  <SortableItem key={item.id} id={item.id} name={item.name} />
                ))}
              </SortableContext>
            </DroppableContainer>
          </Col>
        ))}
      </Row>
    </DndContext>
  );
}

// make a droppable wrapper that accepts items even when empty
function DroppableContainer({ id, items, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      style={{
        minHeight: 200,
        padding: 12,
        border: "2px dashed #1890ff",
        borderRadius: 4,
        backgroundColor: isOver ? "#f0f0f0" : "#f9f9f9",
      }}
    >
      {items.length === 0 ? (
        <Paragraph
          style={{
            textAlign: "center",
            color: "#909399",
            marginTop: 16,
          }}
        >
          将项目拖到此区域
        </Paragraph>
      ) : (
        children
      )}
    </div>
  );
}

function SortableItem({ id, name }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <Card
      ref={setNodeRef}
      size="small"
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        transition,
        marginBottom: 8,
        cursor: "grab",
        opacity: isDragging ? 0.6 : 1,
        backgroundColor: isDragging ? "#e0e0e0" : undefined,
      }}
      {...attributes}
      {...listeners}
    >
      {name}
    </Card>
  );
}
