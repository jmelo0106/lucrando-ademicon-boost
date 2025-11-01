#!/usr/bin/env bash
set -euo pipefail

# configurações - altere se necessário
BUILD_CMD="npm run build"
WORKTREE_DIR="/tmp/gh-pages"
BRANCH="gh-pages"

echo "1) build..."
npm ci
$BUILD_CMD

echo "2) atualizando branch $BRANCH com o conteúdo de dist/..."
git checkout main
git pull origin main

# cria worktree para gh-pages (ou usa a branch existente)
if git show-ref --verify --quiet refs/heads/$BRANCH; then
  git worktree add $WORKTREE_DIR $BRANCH
else
  git worktree add $WORKTREE_DIR -b $BRANCH
fi

rm -rf $WORKTREE_DIR/*
cp -r dist/* $WORKTREE_DIR/

cd $WORKTREE_DIR
git add --all
git commit -m "deploy: atualização do site $(date -u +'%Y-%m-%d %H:%M:%S')" || true
git push origin $BRANCH
cd -

git worktree remove $WORKTREE_DIR || true

echo "Deploy finalizado. Verifique Settings → Pages para garantir que $BRANCH está selecionado."
