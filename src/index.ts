import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { completeFromList } from "@codemirror/autocomplete";
import { styleTags, tags as t } from "@lezer/highlight";

import { parser } from "./syntax.grammar";
import { autocompletions } from "./autocompletions";

export const postgrestLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Keyword: t.keyword,
        Operator: t.operator,
        "( )": t.paren,
      }),
    ],
  }),
});

export const postgrestCompletion = postgrestLanguage.data.of({
  autocomplete: completeFromList(autocompletions),
});

export function postgrest() {
  return new LanguageSupport(postgrestLanguage, [postgrestCompletion]);
}
