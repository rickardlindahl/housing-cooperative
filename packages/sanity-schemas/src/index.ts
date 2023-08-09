export * from "./generated-schema";
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import file from "./file";

export const schemaTypes = [post, author, file, category, blockContent];

export default schemaTypes;
