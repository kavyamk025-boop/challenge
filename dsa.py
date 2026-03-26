# #checking anagram or not

# # def count(a):
# #     count=[]
# #     for i in range(0,len(a)-1):
# #       feq=0
# #       for j in range(0,len(a)-1):
# #           if(a[i]==a[j]):
# #             feq+=1
# #       count.append(feq)
# #     return count
# # d="kavya"
# # count(d)
# # e="hjkua"    
# # count(e)
# # if d==e:
# #     print("anagram")
# # else:
# #     print("no t anagram")    

# class Tree:
#     def __init__(self,data):
#         self.children=[]
#         self.data=data
# def print_tree(node):
#     print(node.data)
#     for child in node.children:
#         print_tree(child)

# root=Tree(4)
# child1=Tree(3)
# child2=Tree(2)
# root.children.append(child1)
# root.children.append(Tree(6))
# print(root.data)
# print_tree(root)
# class Node:
#     def __init__(self,data):
#         self.data=data
#         self.left=0
#         self.right=0
# c=Node(1)
# c.left=(Node(2))
# c.right=(Node(4))
# c.left.left=(Node(2))

# c.left.right=(Node(62))
# def inorder(node):
#     if node:
#         inorder(node.left)
#         print(node.data)
#         inorder(node.right)
# inorder(c)
# class Lnode:
#     def __init__(self,data):
#         self.data=data
#         self.next=None
# def insert(head,data):
#     new_node=Node(data)
#     new_node.next=head       
#     head=new_node
#     return head    
class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
def isin(head):
    current=head
    while current and current.next:
        if current.data <current.next.data:
          current=current.next
        else:
           return False

        
    return True          
n1=Node(4)
n2=Node(5)
n3=Node(6)
n4=Node(7)
n5=Node(8)
n1.next=n2
n2.next=n3
n3.next=n4
n4.next=n5
n5.next=None
current=n1
print(isin(n1))
