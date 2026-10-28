
import type { DocumentModel } from "@novawriter/document-model";

const documentModel: DocumentModel = {
  id: "doc-1",
  paragraphs: [
    {
      id: "p1",
      runs: [
        {
          id: "r1",
          text: "Welcome to NovaWriter!",
          bold: true,
        },
      ],
    },
    {
      id: "p2",
      runs: [
        {
          id: "r2",
          text: "We are building our own desktop word processor ",
        },
        {
          id: "r3",
          text: "step by step",
          italic: true,
        },
        {
          id: "r4",
          text: ", inspired by LibreOffice Writer.",
        },
      ],
    },
    {
      id: "p3",
      runs: [
        {
          id: "r5",
          text: "Our first rendering engine is working!",
          underline: true,
        },
      ],
    },
  ],
};

export default documentModel;
