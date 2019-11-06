# fll-project

Make sure you work on your own branch!

# How to make your own branch?

Start by creating your new branch

```git branch name_of_your_branch```

Check what branches exist at the moment using

```git branch```

You should see that the master branch is currently active

```bash
 name_of_your_branch
* master
```

Move into your folder

```git checkout name_of_your_branch```

Check you are in your folder

```git branch```

Your folder should now have the asterisk next to it indicating that the branch is now active

```bash
* name_of_branch
 master
```

Now that you are on the correct branch lets add all the new changes to your new branch

```git add files_to_add```
```git commit -m "message of feature added"```

Only use the first time you push to your new branch ```git push --set-upstream origin name_of_branch``` then use ```git push``` topush to your branch

If you ever need to go back to another branch simply ```git checkout name_of_branch```

Make sure you push to the right branch so we don't have any conflicting errors