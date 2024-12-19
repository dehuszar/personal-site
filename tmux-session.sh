#!/usr/bin/env bash

SESSION_NAME="personal-site"
SESSIONEXISTS=$(tmux list-sessions | grep $SESSION)
# Only create tmux session if it doesn't already exist
if [ "$SESSIONEXISTS" = "" ]
then
  # Start our editor
  tmux new-session -d -s $SESSION_NAME
  tmux rename-window -t 0 'Nvim'
  tmux send-keys -t 'Nvim' 'nvim' C-m

  # Setup a window for Hugo server process
  tmux new-window -t $SESSION:1 -n 'Hugo Server'
  tmux send-keys -t 'Hugo Server' 'hugo serve' C-m

  # Setup an additional shell
  tmux new-window -t $SESSION:2 -n 'Shell'
  tmux send-keys -t 'Shell' "bash" C-m 'clear' C-m
fi

# Attach Session, on the Main window
tmux attach-session -t $SESSION:0
